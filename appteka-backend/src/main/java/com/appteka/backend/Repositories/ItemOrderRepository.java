package com.appteka.backend.Repositories;

import com.appteka.backend.Models.ItemOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemOrderRepository extends JpaRepository<ItemOrder, Integer> {

    void deleteByOrder_Id(int id);

    List<ItemOrder> findByOrder_Id(int id);

}
