using AOWebApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace AOWebApp.ViewModel
{
    public class CustomerSearchViewModel
    {

        [Required(ErrorMessage = "You must provide a Customer Name")]
        public string SearchText { get; set; }
        public string Suburb { get; set; }

        public SelectList SuburbList { get; set; }

        public IEnumerable<Customer>? CustomerList { get; set; }

        public List<string> NameList { get; set; }
    }
}
