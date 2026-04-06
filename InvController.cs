using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("inventory")]
public class InventoryController : ControllerBase
{
    //[TEST SECRET] Will trigger AWS Access Key detection (AKIA prefix + 16 chars)
    private readonly string aws_access_key_id = "AKIAIOSFODNN7EXAMPLE";
    private readonly string aws_secret_access_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";



    [HttpGet("items")]
    public IActionResult GetAllItems() {
        return Ok(new string[] { "Item1", "Item2" });
    }

    [HttpDelete("items/{sku}")]
    public IActionResult RemoveItem(string sku) {
        return NoContent();
    }
}
