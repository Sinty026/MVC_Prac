using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOWebApp.Models.CodeFirst
{
    public class ExampleItem
    {
        [Key]
        public int itemId { get; set; }

        [Required]
        [Display(Name = "Item Name")]
        [StringLength(100, ErrorMessage = "The item name must be less than 100 characters")]
        public string ItemName { get; set; }

        [Required]
        [Range(1, 10000)]
        [Display(Name = "Price")]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18, 2")]
        public decimal ItemPrice { get; set; }

    }
}
