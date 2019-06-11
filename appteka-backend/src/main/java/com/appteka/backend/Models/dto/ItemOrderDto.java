package com.appteka.backend.Models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemOrderDto {

    private int itemId;
    private int quantity;
    private boolean onRecipe;
}
