"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resTransformer = void 0;
const transformedEntity = (params) => {
    let entityTransformed = [];
    if (params && Array.isArray(params)) {
        params.forEach((user) => {
            entityTransformed.push(resEntity(user));
        });
        return entityTransformed;
    }
    return resEntity(params);
};
exports.resTransformer = transformedEntity;
const resEntity = (user) => {
    const entity = {
        _id: user._id,
        phone: user.phone,
        name: user.name,
        role: user.role,
    };
    return entity;
};
