package com.appteka.backend.Controllers;

import com.appteka.backend.Models.Item;
import com.appteka.backend.Services.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/items")
public class ItemController {

    public final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }


    @GetMapping()
    public List<Item> getAllItems(@RequestParam(required = false) String search){
        return itemService.getAll(search);
    }

    @GetMapping(value = "/{id}")
    public Item getOneItem(@PathVariable int id){
        return itemService.getOne(id);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteItem(@PathVariable int id){
        itemService.deleteItem(id);
    }

    @PostMapping(value = "/addItem")
    public Item addItem(@RequestBody Item item ){
        return itemService.addItem(item);
    }

    @PutMapping(value="/{id}")
    public Item updateItem(@PathVariable int id, @RequestBody Item item){
        return itemService.updateItem(item);
    }

}
