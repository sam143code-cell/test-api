using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("inventory")]
public class InventoryController : ControllerBase
{
    [HttpGet("items")]
    public IActionResult GetAllItems() {
        return Ok(new string[] { "Item1", "Item2" });
    }

    [HttpDelete("items/{sku}")]
    public IActionResult RemoveItem(string sku) {
        return NoContent();
    }
}
