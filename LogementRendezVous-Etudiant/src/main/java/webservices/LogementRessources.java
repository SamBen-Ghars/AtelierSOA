package webservices;

import entities.Logement;
import metiers.LogementBusiness;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
@Path("/logement")
public class LogementRessources {
    static LogementBusiness help = new LogementBusiness();
    @GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        return Response.
                status(200).header("Access-Control-Allow-Origin", "*").
                entity(help.getLogements()).
                build();
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Response addLogement(Logement logement) {
        help.addLogement(logement);

        return Response.status(201).header("Access-Control-Allow-Origin", "*").entity("Logement a été ajouté avec success").build();
    }


    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/delete/{ref}")
    public Response deleteLogement(@PathParam(value = "ref") int ref) {
        help.deleteLogement(ref);
        return Response.status(Response.Status.OK).header("Access-Control-Allow-Origin", "*")
                .entity("Logement a été supprimé avec succès")
                .build();
    }


    @PUT
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/update/{reference}")
    public Response updateLogement(@PathParam("reference") int reference, Logement logement) {
        boolean updated = help.updateLogement(reference, logement);

        if (updated) {
            return Response.status(Response.Status.OK)
                    .entity("Logement mis à jour avec succès")
                    .build();
        } else {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("Logement non trouvé")
                    .build();
        }
    }



}
