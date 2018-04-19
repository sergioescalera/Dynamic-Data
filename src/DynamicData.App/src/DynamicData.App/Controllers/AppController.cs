using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DynamicData.App.Controllers
{
    [Route("", Name = Routes.App)]
    public class AppController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return View();
        }

        [Route(Routes.Error, Name = Routes.Error)]
        public IActionResult Error(String error)
        {
            ViewBag.Error = error ?? String.Empty;

            return View();
        }
    }
}