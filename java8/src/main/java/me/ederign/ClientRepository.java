package me.ederign;

import java.util.List;
import java.util.stream.Collectors;

public class ClientRepository {


    private List<Client> clients;

    public ClientRepository( List<Client> clients ) {
        this.clients = clients;
    }


    public List<String> getClientMails() {
        return clients
                .stream()
                .filter( c -> c.getCompany() != null )
                .map( c -> c.getEmail() )
                .filter( m -> m != null )
                .collect( Collectors.toList() );
    }
}
