package br.com.modelagem.Modelagem.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.modelagem.Modelagem.entity.Post;

public interface IPost extends CrudRepository<Post, Integer> {

}
