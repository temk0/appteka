package com.appteka.backend.Services;

import com.appteka.backend.Models.Order;
import com.appteka.backend.Models.dto.ItemOrderDto;
import com.appteka.backend.Models.dto.OrderDto;
import com.appteka.backend.Repositories.OrderRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService {


    private final OrderRepository orderRepository;

    private final ItemOrderService itemOrderService;

    public OrderService(OrderRepository orderRepository, ItemOrderService itemOrderService) {
        this.orderRepository = orderRepository;
        this.itemOrderService = itemOrderService;
    }

    public List<Order> getAll () {
        return orderRepository.findAll();
    }

    public Optional<Order> getOne(int id){
        return orderRepository.findById(id);
    }

    public void deleteOrder(int id){
        itemOrderService.deleteByOrderId(id);
        orderRepository.deleteById(id);
    }

    public Order addOrder(OrderDto orderDto){
        Order order = orderRepository.save(new Order());

        for (ItemOrderDto itemOrderDto : orderDto.getItems()){
         itemOrderService.addItemOrder(itemOrderDto,order);
        }

        return order;

    }


}
