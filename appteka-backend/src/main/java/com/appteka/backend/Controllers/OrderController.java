package com.appteka.backend.Controllers;

import com.appteka.backend.Models.Order;
import com.appteka.backend.Models.dto.OrderDto;
import com.appteka.backend.Services.OrderService;
import org.springframework.web.bind.annotation.*;

@RestController(value="/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @PostMapping
    public Order createOrder(@RequestBody OrderDto orderDto){
        return orderService.addOrder(orderDto);
    }

    @DeleteMapping(value="/order-delete/{id}")
    public void deleteOrder(@PathVariable int id){
        orderService.deleteOrder(id);
    }

}
