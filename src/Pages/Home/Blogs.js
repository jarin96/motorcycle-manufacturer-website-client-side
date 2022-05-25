import React, { useEffect } from 'react';
const Blogs = () => {
    return (
        <div className='container info-background my-5'>
            <div className='row border p-5 rounded bg-gradient d-flex justify-content-center align-items-center'>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div data-aos="fade-down">
                        <h3 className='text-3xl'>How will you improve the performance of a React Application?</h3>
                        <p>To improve the performance of a react application  we can Keep component in a state local where it is necessary.
                            We can Memorize React components to prevent unnecessary re-renders.We can also do
                            Code-splitting in React using dynamic import
                            Windowing or list virtualization.
                            To improve react application we can lazy load images in React.
                        </p>

                        <h3 className='text-3xl'> What are the different ways to manage a state in a React application?</h3>
                        <p>Node.Js is a javascript engine that you can write any application you want (by programming in the javascript language).It runs your javascript code.Mongodb is a database engine.Code within some application or server uses Mongodb to save,query or update data in a database.There are many web servers built with nodejs that will then use mongodb for storing data.If you want to write some kind of stand-alone program or server in javascript, then you can use nodejs for it.
                            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you should use some form of database.
                        </p>

                        <h3 className='text-3xl'>How does prototypical inheritance work?</h3>
                        <p>Sql is generally used in Relational database management system.Sql database require a schema to be developed in advance and all the data is stored according to that schema.In Sql data is stored in form of tables in the database.Sql uses standardized sql syntax command or query language to query the data.Nosql is non relational database management system.Nosql database have dynamic schema.In NoSql database have dynamic schema.In NoSql data stores form of object,document,graph etc.NoSql don't have any standardized query format to retrieve the data.NoSql databases are used when data to be stored is less and budget is low.</p>

                        <h3 className='text-3xl'>Why you do not set the state directly in React?</h3>
                        <p>Sql is generally used in Relational database management system.Sql database require a schema to be developed in advance and all the data is stored according to that schema.In Sql data is stored in form of tables in the database.Sql uses standardized sql syntax command or query language to query the data.Nosql is non relational database management system.Nosql database have dynamic schema.In NoSql database have dynamic schema.In NoSql data stores form of object,document,graph etc.NoSql don't have any standardized query format to retrieve the data.NoSql databases are used when data to be stored is less and budget is low.</p>
                        <h3 className='text-3xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                        <p>Sql is generally used in Relational database management system.Sql database require a schema to be developed in advance and all the data is stored according to that schema.In Sql data is stored in form of tables in the database.Sql uses standardized sql syntax command or query language to query the data.Nosql is non relational database management system.Nosql database have dynamic schema.In NoSql database have dynamic schema.In NoSql data stores form of object,document,graph etc.NoSql don't have any standardized query format to retrieve the data.NoSql databases are used when data to be stored is less and budget is low.</p>
                        <h3 className='text-3xl'> What is a unit test? Why should write unit tests?</h3>
                        <p>Sql is generally used in Relational database management system.Sql database require a schema to be developed in advance and all the data is stored according to that schema.In Sql data is stored in form of tables in the database.Sql uses standardized sql syntax command or query language to query the data.Nosql is non relational database management system.Nosql database have dynamic schema.In NoSql database have dynamic schema.In NoSql data stores form of object,document,graph etc.NoSql don't have any standardized query format to retrieve the data.NoSql databases are used when data to be stored is less and budget is low.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;