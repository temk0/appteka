package com.appteka.backend.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    private String name;

    @Column(length = 1024)
    private String description;
    private String imageUrl;
    private Double price;
    private Double recipePrice;
    private Integer stock;
    private Boolean recipe;

}
