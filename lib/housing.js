/**
 * Register a property in the asset registry
 * @param {org.bcnetwork.housing.RegisterProperty} request - the property to be registered
 * @transaction
 */
function registerProperty(request) {

    console.log('registerProperty() propId:' + request.property.propId);
    var factory = getFactory();
    var PropertyRegistry;

    return getAssetRegistry('org.bcnetwork.housing.PropertyRegistry')
        .then(function (propRegistry) {

            propertyRegistry = propRegistry;
            //check if the property already exists; if yes throw error
            return propertyRegistry.exists(request.property.propId);
        }).then(function (isExist) {
            
            if (isExist == true) {
                console.error('Property already registered. ' + request.property.propId);
                throw new Error('Property already registered. ' + request.property.propId);
            } else {
                // add the property to the registry

                // Create the property registry entry
                var registryEntry = factory.newResource('org.bcnetwork.housing', 'PropertyRegistry', request.property.propId);
                registryEntry.property = request.property;

                return propertyRegistry.add(registryEntry);
            }
        }).then(function() {
            console.log('Property Registered. propId:' + request.property.propId);

            // emit a notification that a property has been registed
            var propRegisEvent = factory.newEvent('org.bcnetwork.housing', 'PropertyRegisteredNotification');
            propRegisEvent.property = request.property;
            emit(propRegisEvent);
        });
}

/**
 * Add loan to an existing property
 * @param {org.bcnetwork.housing.AddLoanToProperty} request - the details of the property and loan
 * @transaction
 */
function addLoanToProperty(request) {

    console.log('addLoanToProperty() propId:' + request.property.getIdentifier());
    var factory = getFactory();
    var PropertyRegistry;

    return getAssetRegistry('org.bcnetwork.housing.Property')
        .then(function (propRegistry) {

            propertyRegistry = propRegistry;
            //check if the property already exists
            return propertyRegistry.exists(request.property.getIdentifier().split(':')[1]);
        }).then(function (isExist) {
            
            if (isExist == false) {
                console.error('Property not found. ' + request.property.propId);
                throw new Error('Property not found. ' + request.property.propId);
            } else {
                // add loan info to property

                // Add the loan details - TBD

                return true;
            }
        }).then(function() {
            console.log('Property updated with Loan. propId:' + request.property.propId);

            // emit a notification that a property has been updated with loan info
            //var propRegisEvent = factory.newEvent('org.bcnetwork.housing', 'PropertyRegisteredNotification');
            //propRegisEvent.property = request.property;
            //emit(propRegisEvent);
        });

}


/**
 * Add insurance to an existing property
 * @param {org.bcnetwork.housing.AddInsuranceToProperty} request - the details of the property and loan
 * @transaction
 */
function addInsuranceToProperty(request) {

    console.log('addInsuranceToProperty() propId:' + request.property.propId);
    var factory = getFactory();
    var PropertyRegistry;

    return getAssetRegistry('org.bcnetwork.housing.Property')
        .then(function (propRegistry) {

            propertyRegistry = propRegistry;
            //check if the property already exists
            return propertyRegistry.exists(request.property.getIdentifier().split(':')[1]);
        }).then(function (isExist) {
            
            if (isExist == false) {
                console.error('Property not found. ' + request.property.propId);
                throw new Error('Property not found. ' + request.property.propId);
            } else {
                // add the insurance details to property 

                // Add the insurance details - TBD

                return true;
            }
        }).then(function() {
            console.log('Property updated with Insuarnce. propId:' + request.property.propId);

            // emit a notification that a property has been updated with loan info
            //var propRegisEvent = factory.newEvent('org.bcnetwork.housing', 'PropertyRegisteredNotification');
            //propRegisEvent.property = request.property;
            //emit(propRegisEvent);
        });

}
