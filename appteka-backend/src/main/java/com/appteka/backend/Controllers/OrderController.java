package com.appteka.backend.Controllers;

import com.appteka.backend.Models.ItemOrder;
import com.appteka.backend.Models.Order;
import com.appteka.backend.Models.dto.OrderDto;
import com.appteka.backend.Services.ItemOrderService;
import com.appteka.backend.Services.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final ItemOrderService itemOrderService;

    public OrderController(OrderService orderService, ItemOrderService itemOrderService) {
        this.orderService = orderService;
        this.itemOrderService = itemOrderService;
    }


    @GetMapping(value = "/{id}")
    public List<ItemOrder> getOrder(@PathVariable int id){
        return itemOrderService.findByOrderId(id);
    }

    @PostMapping
    public Order createOrder(@RequestBody OrderDto orderDto){
        return orderService.addOrder(orderDto);
    }

    @DeleteMapping(value="/{id}")
    public void deleteOrder(@PathVariable int id){
        orderService.deleteOrder(id);
    }

}
