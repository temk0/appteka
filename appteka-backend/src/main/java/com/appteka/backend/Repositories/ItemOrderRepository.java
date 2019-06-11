package com.appteka.backend.Repositories;

import com.appteka.backend.Models.ItemOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemOrderRepository extends JpaRepository<ItemOrder, Integer> {
}
