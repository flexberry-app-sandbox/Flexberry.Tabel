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
    /// СоставБриг.
    /// </summary>
    // *** Start programmer edit section *** (СоставБриг CustomAttributes)

    // *** End programmer edit section *** (СоставБриг CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставБригE", new string[] {
            "Должность as \'Должность\'",
            "Должность.наименование as \'Должность\'",
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Должность.наименование",
            "Сотрудник.ФИО"})]
    [MasterViewDefineAttribute("СоставБригE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [MasterViewDefineAttribute("СоставБригE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    public class СоставБриг : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Tabel.Должность fДолжность;
        
        private IIS.Tabel.Сотрудник fСотрудник;
        
        private IIS.Tabel.Бригада fБригада;
        
        // *** Start programmer edit section *** (СоставБриг CustomMembers)

        // *** End programmer edit section *** (СоставБриг CustomMembers)

        
        /// <summary>
        /// СоставБриг.
        /// </summary>
        // *** Start programmer edit section *** (СоставБриг.Должность CustomAttributes)

        // *** End programmer edit section *** (СоставБриг.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Tabel.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (СоставБриг.Должность Get start)

                // *** End programmer edit section *** (СоставБриг.Должность Get start)
                IIS.Tabel.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (СоставБриг.Должность Get end)

                // *** End programmer edit section *** (СоставБриг.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставБриг.Должность Set start)

                // *** End programmer edit section *** (СоставБриг.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (СоставБриг.Должность Set end)

                // *** End programmer edit section *** (СоставБриг.Должность Set end)
            }
        }
        
        /// <summary>
        /// СоставБриг.
        /// </summary>
        // *** Start programmer edit section *** (СоставБриг.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (СоставБриг.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Tabel.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (СоставБриг.Сотрудник Get start)

                // *** End programmer edit section *** (СоставБриг.Сотрудник Get start)
                IIS.Tabel.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (СоставБриг.Сотрудник Get end)

                // *** End programmer edit section *** (СоставБриг.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставБриг.Сотрудник Set start)

                // *** End programmer edit section *** (СоставБриг.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (СоставБриг.Сотрудник Set end)

                // *** End programmer edit section *** (СоставБриг.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Tabel.Бригада.
        /// </summary>
        // *** Start programmer edit section *** (СоставБриг.Бригада CustomAttributes)

        // *** End programmer edit section *** (СоставБриг.Бригада CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Бригада"})]
        public virtual IIS.Tabel.Бригада Бригада
        {
            get
            {
                // *** Start programmer edit section *** (СоставБриг.Бригада Get start)

                // *** End programmer edit section *** (СоставБриг.Бригада Get start)
                IIS.Tabel.Бригада result = this.fБригада;
                // *** Start programmer edit section *** (СоставБриг.Бригада Get end)

                // *** End programmer edit section *** (СоставБриг.Бригада Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставБриг.Бригада Set start)

                // *** End programmer edit section *** (СоставБриг.Бригада Set start)
                this.fБригада = value;
                // *** Start programmer edit section *** (СоставБриг.Бригада Set end)

                // *** End programmer edit section *** (СоставБриг.Бригада Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставБригE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставБригE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставБригE", typeof(IIS.Tabel.СоставБриг));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставБриг.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставБриг CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставБриг CustomAttributes)
    public class DetailArrayOfСоставБриг : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Tabel.DetailArrayOfСоставБриг members)

        // *** End programmer edit section *** (IIS.Tabel.DetailArrayOfСоставБриг members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставБриг by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставБриг.
        /// </summary>
        public DetailArrayOfСоставБриг(IIS.Tabel.Бригада fБригада) : 
                base(typeof(СоставБриг), ((ICSSoft.STORMNET.DataObject)(fБригада)))
        {
        }
        
        public IIS.Tabel.СоставБриг this[int index]
        {
            get
            {
                return ((IIS.Tabel.СоставБриг)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Tabel.СоставБриг dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
