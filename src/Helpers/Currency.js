var formatterCL = new Intl.NumberFormat('es-CL');

const Currency = (value) => {
    return "$"+formatterCL.format(value);
}
export default Currency