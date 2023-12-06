package Tabel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Tabel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: График
 */
@Entity(name = "IISTabelГрафик")
@Table(schema = "public", name = "График")
public class Grafik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Конец")
    private String конец;

    @Column(name = "Начало")
    private String начало;

    @Column(name = "Состояние")
    private String состояние;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tabel")
    @Convert("Tabel")
    @Column(name = "Табель", length = 16, unique = true, nullable = false)
    private UUID _tabelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tabel", insertable = false, updatable = false)
    private Tabel tabel;


    public Grafik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонец() {
      return конец;
    }

    public void setКонец(String конец) {
      this.конец = конец;
    }

    public String getНачало() {
      return начало;
    }

    public void setНачало(String начало) {
      this.начало = начало;
    }

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }


}