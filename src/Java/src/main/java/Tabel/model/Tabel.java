package Tabel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tabel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Табель
 */
@Entity(name = "IISTabelТабель")
@Table(schema = "public", name = "Табель")
public class Tabel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КонецС")
    private String конецс;

    @Column(name = "НачалоС")
    private String началос;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "tabel", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Grafik> grafiks;


    public Tabel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонецС() {
      return конецс;
    }

    public void setКонецС(String конецс) {
      this.конецс = конецс;
    }

    public String getНачалоС() {
      return началос;
    }

    public void setНачалоС(String началос) {
      this.началос = началос;
    }


}