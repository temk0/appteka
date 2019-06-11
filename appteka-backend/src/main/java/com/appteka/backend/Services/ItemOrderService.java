package com.appteka.backend.Services;

import com.appteka.backend.Models.ItemOrder;
import com.appteka.backend.Repositories.ItemOrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemOrderService {


    private final ItemOrderRepository itemOrderRepository;

    public ItemOrderService(ItemOrderRepository itemOrderRepository) {
        this.itemOrderRepository = itemOrderRepository;
    }

    public List<ItemOrder> getAll(){
        return itemOrderRepository.findAll();
    }

    public Optional<ItemOrder> getOne(int id){
        return itemOrderRepository.findById(id);
    }

    public void deleteOne(int id){
        itemOrderRepository.deleteById(id);
    }

}
