package com.appteka.backend.Services;

import com.appteka.backend.Models.Item;
import com.appteka.backend.Repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    public Optional<Item> getOne(int id) {
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
