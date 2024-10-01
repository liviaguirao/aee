package br.com.modelagem.Modelagem.DAO;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.modelagem.Modelagem.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{
    
}