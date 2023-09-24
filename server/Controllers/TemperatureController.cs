using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TemperatureController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
               
        public TemperatureController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet(Name = "GetTemperature")]
        public async Task<Temperature> Get()
        {
            var httpRequestMessage = new HttpRequestMessage(
                HttpMethod.Get,
                "https://dapds00.nci.org.au/thredds/dodsC/fx3/GBR1_H2p0_B3p2_Cfur_Dnrt.ncml.ascii?longitude%5B0:1:2388%5D%5B0:1:509%5D,latitude%5B0:1:2388%5D%5B0:1:509%5D");


            var httpClient = _httpClientFactory.CreateClient();
            var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

            // Process response message and return data

            return new Temperature{TestValue = 1 };
        }
    }
}