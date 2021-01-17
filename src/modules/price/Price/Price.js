import React, { useEffect } from 'react';

import './Price.css';

import { LoadJS } from '../../../libraries/datatables/datatables';
import AddPrice from './../AddPrice/AddPrice';

const Price = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
    
  }, []);
  
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Prix</strong>
    </div>
    <div className="card-body">

      <table id="example1" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom route</th>
            <th>Type de vehicule</th>
            <th>Prix</th>
            <th>Prix enfant</th>
            <th>Prix Special</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3EE33TG</td>
            <td>bus</td>
            <td className="badge badge-primary">213$</td>
            <td>21$</td>
            <td>23$</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          <tr>
            <td>K99J9UJ9</td>
            <td>bus</td>
            <td className="badge badge-primary">343$</td>
            <td>65$</td>
            <td>78$</td>
            <td>
                        <button  data-toggle="modal" data-target="#edit" type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                        <button  type="button" class="btn btn-danger btn-sm" onClick="return confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?');"><i class="fas fa-trash-alt"></i></button></td>
          </tr>
          
          </tbody>
          <tfoot>
          <tr>
            <th>Nom route</th>
            <th>Type de vehicule</th>
            <th>Prix</th>
            <th>Prix enfant</th>
            <th>Prix Special</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
      <button data-toggle="modal" data-target="#addPrice" type="button" className="btn btn-success btn-sm">Ajouter</button>
      <div class="modal fade" id="addPrice" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <AddPrice/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
           <viewPrice/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
)};

Price.propTypes = {};

Price.defaultProps = {};

export default Price;