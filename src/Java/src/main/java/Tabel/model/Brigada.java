package Tabel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tabel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Бригада
 */
@Entity(name = "IISTabelБригада")
@Table(schema = "public", name = "Бригада")
public class Brigada {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "конец")
    private String конец;

    @Column(name = "начало")
    private String начало;

    @Column(name = "назначение")
    private String назначение;

    @OneToMany(mappedBy = "brigada", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavBrig> sostavbrigs;


    public Brigada() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getконец() {
      return конец;
    }

    public void setконец(String конец) {
      this.конец = конец;
    }

    public String getначало() {
      return начало;
    }

    public void setначало(String начало) {
      this.начало = начало;
    }

    public String getназначение() {
      return назначение;
    }

    public void setназначение(String назначение) {
      this.назначение = назначение;
    }


}