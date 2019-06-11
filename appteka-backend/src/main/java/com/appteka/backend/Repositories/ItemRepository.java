package com.appteka.backend.Repositories;

import com.appteka.backend.Models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    Item findById(int id);
}
