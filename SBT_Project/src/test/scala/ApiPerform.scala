import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
import scala.concurrent.duration._

class ApiPerform extends Simulation {
  val atOnceUserCount: Int = 50
  val constantUserCount: Int = 20
  val rampUserCount: Int = 100
  val commonHeaders: Map[String, String] = Map("Content-Type" -> "application/json")
  val httpProtocol: HttpProtocolBuilder = http.baseUrl("https://reqres.in")


  val chainedScenario: ScenarioBuilder = scenario("Chained Scenario")
    .exec(
      http("GET Request")
        .get("/api/users?page=2")
        .check(status.is(200))
    )

  setUp(
    chainedScenario.inject(
      nothingFor(5.seconds),
      atOnceUsers(atOnceUserCount)
    )
  ).protocols(httpProtocol)
    .maxDuration(1.minute)
    .assertions(
      global.successfulRequests.percent.gt(95),
      forAll.responseTime.max.lt(10000)
    )
}