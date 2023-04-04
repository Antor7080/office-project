const transformedEntity: any = (params: any) => {
    let entityTransformed: object[] = [];

    if (params && Array.isArray(params)) {
        params.forEach((user) => {
            entityTransformed.push(resEntity(user));
        });
        return entityTransformed;
    }

    return resEntity(params);
};

const resEntity = (user: any) => {
    const entity: any = {
        _id: user._id,
        phone: user.phone,
        name: user.name,
        role: user.role,
    };

    return entity;
};

export { transformedEntity as resTransformer };
