using Microsoft.AspNetCore.Mvc.Rendering;

namespace AOWebApp.ViewModel
{
    public class ItemSearchViewModel
    {
        public string SearchText { get; set; }
        public int? CategoryId{ get; set; }

        public List<Models.Item> Items;

        public SelectList CategoryList { get; set; }
    }
}
