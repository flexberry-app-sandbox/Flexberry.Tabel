﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tabel
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// График.
    /// </summary>
    // *** Start programmer edit section *** (График CustomAttributes)

    // *** End programmer edit section *** (График CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГрафикE", new string[] {
            "Начало as \'Начало смены с\'",
            "Конец as \'по\'",
            "Состояние as \'Состояние \'"})]
    public class График : ICSSoft.STORMNET.DataObject
    {
        
        private string fКонец;
        
        private string fНачало;
        
        private IIS.Tabel.Причины fСостояние;
        
        private IIS.Tabel.Сотрудник fСотрудник;
        
        private IIS.Tabel.Табель fТабель;
        
        // *** Start programmer edit section *** (График CustomMembers)

        // *** End programmer edit section *** (График CustomMembers)

        
        /// <summary>
        /// Конец.
        /// </summary>
        // *** Start programmer edit section *** (График.Конец CustomAttributes)

        // *** End programmer edit section *** (График.Конец CustomAttributes)
        [StrLen(255)]
        public virtual string Конец
        {
            get
            {
                // *** Start programmer edit section *** (График.Конец Get start)

                // *** End programmer edit section *** (График.Конец Get start)
                string result = this.fКонец;
                // *** Start programmer edit section *** (График.Конец Get end)

                // *** End programmer edit section *** (График.Конец Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (График.Конец Set start)

                // *** End programmer edit section *** (График.Конец Set start)
                this.fКонец = value;
                // *** Start programmer edit section *** (График.Конец Set end)

                // *** End programmer edit section *** (График.Конец Set end)
            }
        }
        
        /// <summary>
        /// Начало.
        /// </summary>
        // *** Start programmer edit section *** (График.Начало CustomAttributes)

        // *** End programmer edit section *** (График.Начало CustomAttributes)
        [StrLen(255)]
        public virtual string Начало
        {
            get
            {
                // *** Start programmer edit section *** (График.Начало Get start)

                // *** End programmer edit section *** (График.Начало Get start)
                string result = this.fНачало;
                // *** Start programmer edit section *** (График.Начало Get end)

                // *** End programmer edit section *** (График.Начало Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (График.Начало Set start)

                // *** End programmer edit section *** (График.Начало Set start)
                this.fНачало = value;
                // *** Start programmer edit section *** (График.Начало Set end)

                // *** End programmer edit section *** (График.Начало Set end)
            }
        }
        
        /// <summary>
        /// Состояние.
        /// </summary>
        // *** Start programmer edit section *** (График.Состояние CustomAttributes)

        // *** End programmer edit section *** (График.Состояние CustomAttributes)
        public virtual IIS.Tabel.Причины Состояние
        {
            get
            {
                // *** Start programmer edit section *** (График.Состояние Get start)

                // *** End programmer edit section *** (График.Состояние Get start)
                IIS.Tabel.Причины result = this.fСостояние;
                // *** Start programmer edit section *** (График.Состояние Get end)

                // *** End programmer edit section *** (График.Состояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (График.Состояние Set start)

                // *** End programmer edit section *** (График.Состояние Set start)
                this.fСостояние = value;
                // *** Start programmer edit section *** (График.Состояние Set end)

                // *** End programmer edit section *** (График.Состояние Set end)
            }
        }
        
        /// <summary>
        /// График.
        /// </summary>
        // *** Start programmer edit section *** (График.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (График.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Tabel.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (График.Сотрудник Get start)

                // *** End programmer edit section *** (График.Сотрудник Get start)
                IIS.Tabel.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (График.Сотрудник Get end)

                // *** End programmer edit section *** (График.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (График.Сотрудник Set start)

                // *** End programmer edit section *** (График.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (График.Сотрудник Set end)

                // *** End programmer edit section *** (График.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Tabel.Табель.
        /// </summary>
        // *** Start programmer edit section *** (График.Табель CustomAttributes)

        // *** End programmer edit section *** (График.Табель CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Табель"})]
        public virtual IIS.Tabel.Табель Табель
        {
            get
            {
                // *** Start programmer edit section *** (График.Табель Get start)

                // *** End programmer edit section *** (График.Табель Get start)
                IIS.Tabel.Табель result = this.fТабель;
                // *** Start programmer edit section *** (График.Табель Get end)

                // *** End programmer edit section *** (График.Табель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (График.Табель Set start)

                // *** End programmer edit section *** (График.Табель Set start)
                this.fТабель = value;
                // *** Start programmer edit section *** (График.Табель Set end)

                // *** End programmer edit section *** (График.Табель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГрафикE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГрафикE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГрафикE", typeof(IIS.Tabel.График));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of График.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfГрафик CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfГрафик CustomAttributes)
    public class DetailArrayOfГрафик : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Tabel.DetailArrayOfГрафик members)

        // *** End programmer edit section *** (IIS.Tabel.DetailArrayOfГрафик members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type График by index.
        /// </summary>
        /// <summary>
        /// Adds object with type График.
        /// </summary>
        public DetailArrayOfГрафик(IIS.Tabel.Табель fТабель) : 
                base(typeof(График), ((ICSSoft.STORMNET.DataObject)(fТабель)))
        {
        }
        
        public IIS.Tabel.График this[int index]
        {
            get
            {
                return ((IIS.Tabel.График)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Tabel.График dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
