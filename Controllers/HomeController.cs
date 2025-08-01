using System.Diagnostics;
using AOWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace AOWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            //throw new Exception("this is an error");
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Test(int? id, string text)
        {
            //var id = Request.RouteValues["id"];
            var val = id;

            //ViewData.Add("id", id);
            ViewBag.Id = id;
            ViewBag.serachText = text;

            return View();
        }
        public IActionResult RazorTest()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
