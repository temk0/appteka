package com.appteka.backend.Models.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderDto {

    private List<ItemOrderDto> items;

}
