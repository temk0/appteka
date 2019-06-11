package com.appteka.backend.Services;

import com.appteka.backend.Models.Order;
import com.appteka.backend.Repositories.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {


    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAll () {
        return orderRepository.findAll();
    }

    public Optional<Order> getOne(int id){
        return orderRepository.findById(id);
    }

    public void deleteOrder(int id){
       orderRepository.deleteById(id);
    }


}
