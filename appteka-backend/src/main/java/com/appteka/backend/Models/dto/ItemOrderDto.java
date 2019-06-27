package com.appteka.backend.Models.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemOrderDto {

    private int itemId;
    private int quantity;
    private boolean onRecipe;
}
