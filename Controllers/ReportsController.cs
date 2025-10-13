using AOWebApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.Controllers
{
    public class ReportsController : Controller
    {
        private readonly AmazonOrders2025Context _context;

        public ReportsController(AmazonOrders2025Context context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var yearList = _context.CustomerOrders
                .Select(co => co.OrderDate.Year)
                .Distinct()
                .ToList();
            return View("AnnualSalesReport", new SelectList(yearList));
        }

        [Produces("application/json")]
        public IActionResult AnnualSalesReportData(int Year)
        {
            if (Year > 0)
            {
                var orderSummary = _context.ItemsInOrders
                    .Where(iio => iio.OrderNumberNavigation.OrderDate.Year == Year)
                    .GroupBy(iio => new { iio.OrderNumberNavigation.OrderDate.Year, iio.OrderNumberNavigation.OrderDate.Month })
                    .Select(group => new
                    {
                        year = group.Key.Year,
                        monthNo = group.Key.Month,
                        monthName = System.Globalization.CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(group.Key.Month),
                        totalItems = group.Sum(iio => iio.NumberOf),
                        totalSales = group.Sum(iio => iio.TotalItemCost)
                    })
                    .OrderBy(data => data.monthNo);

                return Json(orderSummary);
            }
            else
            {
                return BadRequest();
            }
           
        }
    }
}
