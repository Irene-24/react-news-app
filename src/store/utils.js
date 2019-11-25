export const updateObject = (oldOBject, updatedValues) => 
{
    return {
        ...oldOBject,
        ...updatedValues
    }
};

