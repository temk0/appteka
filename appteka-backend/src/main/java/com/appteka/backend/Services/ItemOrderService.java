package com.appteka.backend.Services;

import com.appteka.backend.Models.ItemOrder;
import com.appteka.backend.Models.Order;
import com.appteka.backend.Models.dto.ItemOrderDto;
import com.appteka.backend.Repositories.ItemOrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemOrderService {


    private final ItemOrderRepository itemOrderRepository;

    private final ItemService itemService;

    public ItemOrderService(ItemOrderRepository itemOrderRepository, ItemService itemService) {
        this.itemOrderRepository = itemOrderRepository;
        this.itemService = itemService;
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

    public ItemOrder addItemOrder(ItemOrderDto itemOrderDto, Order order){
        ItemOrder itemOrder = new ItemOrder();
        itemOrder.setOnRecipe(itemOrderDto.isOnRecipe());
        itemOrder.setQuantity(itemOrderDto.getQuantity());
        itemOrder.setOrder(order);
        itemOrder.setItem(itemService.getOne(itemOrderDto.getItemId()));

        itemOrder.getItem().setStock(itemOrder.getItem().getStock() - itemOrderDto.getQuantity());

        return itemOrderRepository.save(itemOrder);
    }

    public void deleteByOrderId(int id){
        itemOrderRepository.deleteByOrder_Id(id);
    }

    public List<ItemOrder> findByOrderId(int id){
        return itemOrderRepository.findByOrder_Id(id);
    }

}
