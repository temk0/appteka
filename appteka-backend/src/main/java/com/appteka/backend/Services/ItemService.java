package com.appteka.backend.Services;

import com.appteka.backend.Models.Item;
import com.appteka.backend.Repositories.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {


    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getAll(String search) {
        if(search != null && !search.isEmpty()) {
            return itemRepository.findByNameContaining(search);
        }
        return itemRepository.findAll();
    }

    public Item getOne(int id) {
        return itemRepository.findById(id);
    }

    public void deleteItem(int id) {
        itemRepository.deleteById(id);
    }

    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    public Item updateItem(Item item) {

        Item oldItem = itemRepository.getOne(item.getId());
        oldItem.setName(item.getName());
        oldItem.setDescription(item.getDescription());
        oldItem.setImageUrl(item.getImageUrl());
        oldItem.setPrice(item.getPrice());
        oldItem.setRecipePrice(item.getRecipePrice());
        oldItem.setStock(item.getStock());
        oldItem.setRecipe(item.getRecipe());
        return itemRepository.save(oldItem);
    }

}
