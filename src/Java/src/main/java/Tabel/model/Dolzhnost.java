package Tabel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tabel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должность
 */
@Entity(name = "IISTabelДолжность")
@Table(schema = "public", name = "Должность")
public class Dolzhnost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "код")
    private String код;

    @Column(name = "наименование")
    private String наименование;


    public Dolzhnost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getкод() {
      return код;
    }

    public void setкод(String код) {
      this.код = код;
    }

    public String getнаименование() {
      return наименование;
    }

    public void setнаименование(String наименование) {
      this.наименование = наименование;
    }


}