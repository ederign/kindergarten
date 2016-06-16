package me.ederign;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;

public class ClientRepositoryTest {


    private ClientRepository repo;

    @Before
    public void setup() {
        Company empresa = new Company( "RedHat" );
        Client completo1 = new Client( "Completo1", "completo1@redhat.com", empresa );
        Client completo2 = new Client( "Completo2", "completo2@redhat.com", empresa );
        Client semEmpresa = new Client( "SemEmpresa", "semEmpresa@ederign.me" );
        Client somenteNome = new Client( "SomenteNome" );
        repo = new ClientRepository( Arrays.asList( completo1, semEmpresa, completo2, somenteNome ) );

    }

    @Test
    public void getClientEmailsWithCompanyTest() {
        List<String> clientMails = repo.getClientMails();
        assertEquals( 2, clientMails.size() );
        assertTrue( clientMails.contains( "completo1@redhat.com" ) );
        assertTrue( clientMails.contains( "completo2@redhat.com" ) );
        assertTrue( !clientMails.contains( "semEmpresa@ederign.me" ) );
    }
}