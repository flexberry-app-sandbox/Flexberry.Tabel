package Tabel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tabel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
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

    @Column(name = "начало")
    private String начало;

    @Column(name = "назначение")
    private String назначение;

    @Column(name = "конец")
    private String конец;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

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

    public String getконец() {
      return конец;
    }

    public void setконец(String конец) {
      this.конец = конец;
    }


}