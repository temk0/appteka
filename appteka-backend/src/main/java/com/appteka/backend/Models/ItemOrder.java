package com.appteka.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "items_order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Item item;

    private Boolean onRecipe;

    private Integer quantity;

    @ManyToOne
    private Order order;
}
