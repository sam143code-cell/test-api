import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @GetMapping("/search")
    public String searchProducts(@RequestParam String q) {
        return "Search results for " + q;
    }

    @PostMapping("/{id}/buy")
    public String buyProduct(@PathVariable String id) {
        return "Purchased product " + id;
    }
}
