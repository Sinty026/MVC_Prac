using Microsoft.AspNetCore.Mvc;

namespace AOWebApp.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult RazorTest(int? id, string text, string formvalue)
        {
            ViewBag.id = id;
            ViewBag.text = text;
            ViewBag.formvalue = formvalue;

            return View();
        }
        

    }
}
