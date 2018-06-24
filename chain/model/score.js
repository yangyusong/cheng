module.exports = {
    name: 'scores',
    fields: [
        {
            name: 'id',
            type: 'String',
            length: 20,
            not_null: true,
            primary_key: true
        },
        {
            name: 'name',
            type: 'String',
            length: 64,
            not_null: true,
            unique: true
        }
        ,
        {
            name: 'recorder',
            type: 'String',
            length: 64,
            not_null: true
        }
        ,
        {
            name: 'timestamp',
            type: 'String',
            length: 15,
            not_null: true
        }
,
        {
            name: 'time',
            type: 'String',
            length: 32,
            not_null: true
        },
        {
            name: 'subject',
            type: 'String',
            length: 64,
            not_null: true
        },
        {
            name: 'score',
            type: 'Number',
            not_null: true,
            default: 0
        }
        ,
        {
            name: 'comments',
            type: 'String',
            length: 128
        }
    ]
}
