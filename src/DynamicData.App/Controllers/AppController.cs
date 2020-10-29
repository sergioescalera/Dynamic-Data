using Microsoft.AspNetCore.Mvc;
using System;

namespace DynamicData.App.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error(String error)
        {
            ViewBag.Error = error ?? String.Empty;

            return View();
        }
    }
}