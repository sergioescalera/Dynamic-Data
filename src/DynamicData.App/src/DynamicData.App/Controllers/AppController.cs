using Microsoft.AspNetCore.Mvc;

namespace DynamicData.App.Controllers
{
    [Route("")]
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}