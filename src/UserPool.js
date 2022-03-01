import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "sa-east-1_8KOCIkpCm",
    ClientId: "7eb2pem59u26mpudocppt5v4to"
}

export default new CognitoUserPool(poolData);